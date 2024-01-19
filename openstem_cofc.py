import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

relay_pin = 26
GPIO.setup(relay_pin, GPIO.OUT)

try:
    while True:
        choice = input("Turn on the lights? (yes/no): ")
                
        if choice == "yes":
            GPIO.output(relay_pin, GPIO.HIGH)
            print("Lights ON")
        else:
            GPIO.output(relay_pin, GPIO.LOW)
            print("Lights OFF")
                
except KeyboardInterrupt:

    pass

GPIO.cleanup()
                    
