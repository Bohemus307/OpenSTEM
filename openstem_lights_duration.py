import RPi.GPIO as GPIO
import datetime
import time

relay_pin = 26

GPIO.setmode(GPIO.BCM)

GPIO.setup(relay_pin, GPIO.OUT)

try:
    while True:
        now = datetime.datetime.now().time()

#define the on off times
        start_time = datetime.time(8,0)
        end_time = datetime.time(20,0)
        
        if start_time <= now <= end_time:
            GPIO.output(relay_pin, GPIO.LOW)
            print("Lights turned On at", now)
        else:
            GPIO.output(relay_pin, GPIO.HIGH)
            print("Lights turned Off at", now)
            
            time.sleep(600)
except KeyboardInterrupt:
    pass
GPIO.cleanup()
                        
            
            
            
            