import sys
import os
import datetime
from TTS.api import TTS
def create_folder(folder_path):
  if not os.path.exists(folder_path):
    os.makedirs(folder_path)
def run():
  create_folder("wav")
  timestamp = datetime.datetime.now().strftime("%Y%m%d%H%M%S")
  filename = f"wav/{timestamp}.wav"
  #tts = TTS(model_name="tts_models/en/ljspeech/tacotron2-DDC")
  tts = TTS(model_name="tts_models/en/ek1/tacotron2", progress_bar=True)
  tts.tts_to_file(text=sys.argv[1], file_path=filename)
  print(f"<pinokio>{filename}</pinokio>")
run()
