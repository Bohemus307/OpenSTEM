import RPi.GPIO as GPIO
import time

PUMP_1_PIN = 21
PUMP_2_PIN = 13

GPIO.setmode(GPIO.BCM)

GPIO.setup(PUMP_1_PIN, GPIO.OUT)
GPIO.setup(PUMP_2_PIN, GPIO.OUT)

def turn_on_pump(pin, duration):
    GPIO.output(pin, GPIO.HIGH)
    time.sleep(duration)
    GPIO.output(pin, GPIO.LOW)


pump_schedule_1 = [(11,8,10)]
try:
    while True:
        current_time = time.localtime()
        for schedule in pump_schedule_1:
            if (
                current_time.tm_hour == schedule[0]
                and current_time.tm_min == schedule[1]):
                GPIO.output(PUMP_1_PIN, GPIO.HIGH)
                time.sleep(schedule[2])
                GPIO.output(PUMP_1_PIN, GPIO.LOW)
                time.sleep(5)
                
except KeyboardInterrupt:
    print("Program terminated by user")
finally:
    GPIO.cleanup()
       
                        


                        
            
            
            
            
