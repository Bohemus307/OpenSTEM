import RPi.GPIO as GPIO
import time

PUMP_1_PIN = 21
PUMP_2_PIN = 13

GPIO.setmode(GPIO.BCM)

GPIO.setup(PUMP_1_PIN, GPIO.OUT)
GPIO.setup(PUMP_2_PIN, GPIO.OUT)

try:
    while True:
        action = input("Enter 'on' to turn on pumps, off to turn off pumps, or 'q' to quit: ")
        if action == 'on':
            GPIO.output(PUMP_1_PIN, GPIO.HIGH)
            GPIO.output(PUMP_2_PIN, GPIO.HIGH)
            print("Pumps are ON")
        elif action == 'off':
            GPIO.output(PUMP_1_PIN, GPIO.LOW)
            GPIO.output(PUMP_2_PIN, GPIO.LOW)
            print("Pumps are OFF")
        elif action == 'q':
            break
        else:
            print("Invalid input. Enter 'on', 'off', or 'q'.")
            
except KeyboardInterrupt:
    pass
finally:
    GPIO.cleanup()
