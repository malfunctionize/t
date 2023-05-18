const path = require('path')
class TTS {
  async run (req, ondata, kernel) {
    let paths = kernel.bin.paths()
    console.log("paths", paths)
    let sh = kernel.sh()
    let result = await sh.request({
      "message": {
        //_: ["source", ".env/bin/activate", "&&", "python3", "run.py", req.params.prompt],
        _: ["python3", "run.py", req.params.prompt],
      },
      path: __dirname
    }, (packet) => {
      process.stdout.write(packet.raw)
      ondata(packet) 
    })
    return result
  }
}
module.exports = TTS
