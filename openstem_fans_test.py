import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

relay_pins = [16, 5, 25, 6]

for pin in relay_pins:
    GPIO.setup(pin, GPIO.OUT)
    
def turn_on_fan(fan_number):
    if 1 <= fan_number <= 4:
        GPIO.output(relay_pins[fan_number - 1], GPIO.HIGH)
        print(f"Fan {fan_number} is ON")
    else:
        print("Invalid fan number")


def turn_off_fan(fan_number):
    if 1 <= fan_number <= 3:
        GPIO.output(relay_pins[fan_number - 1], GPIO.LOW)
        print(f"Fan {fan_number} is OFF")
    else:
        print("Invalid fan number")
try:

    while True:
        print("Choose an option:")
        print("1. Turn on a fan")
        print("2. Turn off a fan")
        print("3. Exit")

        option = input("Enter your choice: ")

        if option == '1':
            fan = int(input("Enter the fan number (1-4) to turn ON: "))
            turn_on_fan(fan)
        elif option == '2':
            fan = int(input("Enter the fan number (1-4) to turn OFF: "))
            turn_off_fan(fan)
        elif option == '3':
            break
        else:
            print("Invalid Choice")

except KeyboardInterrupt:
    print("\nExiting...")


finally:
    GPIO.cleanup()




