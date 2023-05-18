const os = require("os")
const platform = os.platform()
let instruction
if (platform === "win32") {
} else {
  instruction = {
    run: [{
      "method": "sh",
      "params": {
        "message": "brew install espeak mecab"
      }
    }, {
      "method": "sh",
      "params": {
        "message": "python3 -m venv .env"
      }
    }, {
      "method": "sh",
      "params": {
        //"message": "source .env/bin/activate && python3 -m pip install -r requirements.txt"
        "message": "pip install --target=./.env -r requirements.txt"
      }
    }]
  }
}
module.exports = instruction
