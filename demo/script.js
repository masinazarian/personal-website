console.log('Hello TensorFlow');


async function run() {
    // Load and plot the original input data that we are going to train on.
    const userId = parseInt(document.getElementById("userId").value);
    const dataAll = (await getData()).filter(sample => sample.userId === userId);

    // Manually split the data
    const ratio = 0.8;
    const data = dataAll.slice(0, dataAll.length * ratio), dataTest = dataAll.slice(dataAll.length * ratio)
    console.log(data, data.length, "samples")

    // Display the rankings with global score
    dataTest.sort((a, b) => b.gScore - a.gScore);
    console.log("pre: ", dataTest)
    document.getElementById("post").innerHTML = JSON.stringify("user id: " + userId);
    document.getElementById("pre").innerHTML = JSON.stringify(dataTest.map(d=> ({title: d.title, score: d.gScore, response: d.response})), null, 2);

    // Create the model
    const model = createModel();
    tfvis.show.modelSummary({name: 'Model Summary'}, model);

    // Convert the data to a form we can use for training.
    const tensorData = convertToTensor(data);
    const {inputs, labels} = tensorData;
    console.log(tensorData)

    // Train the model
    await trainModel(model, inputs, labels);
    console.log('Done Training');

    // Make some predictions using the model and compare them to the
    // original data
    const testTensorData = convertToTensor(dataTest);
    testModel(model, dataTest, testTensorData.inputs);
}


/**
 * Get the data and map the variables that we are interested
 */
async function getData() {
    const dataReq = await fetch('https://gist.githubusercontent.com/jakiejj/651bcf3b9869f8983e19b95710c80133/raw/d3f1e1220dab1b511b3b474b9e9100ca32d79e60/per_user_features.json');
    const sampleData = await dataReq.json();

    return sampleData
        .map(sample =>
            ({
                response: sample[3],
                title: sample[4],
                uid: sample[0],
                userId: sample[1],
                movieId: sample[2],
                gScore: sample[25]*.1,
                features: sample.slice(5, 25),
            }));
}


function createModel() {
    const numOfFeatures = 20
    const feature = tf.input({shape: [numOfFeatures]});
    const offset = tf.input({shape: [1]});
    const dense = tf.layers.dense({units: 1}).apply(feature)
    const sum = tf.layers.add().apply([dense, offset]);
    const logistic = tf.layers.activation({activation: 'sigmoid'}).apply(sum)

    return tf.model({inputs: [feature, offset], outputs: logistic});
}


/**
 * Convert the input data to tensors that we can use for machine
 * learning. We will also do the important best practices of _shuffling_.
 */
function convertToTensor(data) {
    // Wrapping these calculations in a tidy will dispose any
    // intermediate tensors.

    return tf.tidy(() => {
        // Step 1. Shuffle the data
        tf.util.shuffle(data);

        // Step 2. Convert data to Tensor
        const features = data.map(d => d.features);
        const gScore = data.map(d => d.gScore);
        const labels = data.map(d => d.response);

        const labelTensor = tf.tensor1d(labels);

        return {
            inputs: [tf.tensor2d(features), tf.tensor1d(gScore)],
            labels: labelTensor
        }
    });
}


async function trainModel(model, inputs, labels) {
    // Prepare the model for training.
    model.compile({
        optimizer: tf.train.adam(),
        loss: "binaryCrossentropy",
        metrics: ["accuracy"],
    });

    const batchSize = 64;
    const epochs = 300;

    return await model.fit(inputs, labels, {
        batchSize,
        epochs,
        shuffle: true,
        callbacks: tfvis.show.fitCallbacks(
            {name: 'Training Performance'},
            ['loss', 'acc'],
            {height: 200, callbacks: ['onEpochEnd']}
        )
    });
}



function testModel(model, dataTest, testTensor) {

    const scored = model.predict(testTensor).dataSync();
    console.log("scores: ", scored)
    const zipped = dataTest.map(
        (sample, index) => ({title: sample.title, score: scored[index], response: sample.response})
    )
    console.log("post: ", zipped.sort((a, b) => b.score - a.score))
    document.getElementById("post").innerHTML = JSON.stringify(zipped, null, 2);

}
