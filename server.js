const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PythonShell = require('python-shell').PythonShell;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function runCode(code) {
    let options = {
        mode: 'text',
        pythonPath: '/usr/bin/python' // replace with your machine's python executable absolute
    };

    return new Promise((resolve, reject) => {
        PythonShell.runString(code, options, (err, results) => {
            if (err) {
                reject(err);
            }
            
            resolve(results);
        });
    });
}

app.post('/run', async (req, res) => {
    try {
        let result = await runCode(req.body.code);
        res.send(result);
    } catch(err) {
        res.send(err);
    }
});

app.listen(8080, () => console.log('Server listening on port 8080!'))