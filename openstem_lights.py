import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

relay_pins = [26, 13, 21, 27, 4, 23]

for pin in relay_pins:
    GPIO.setup(pin, GPIO.OUT)
    
def turn_on_light(light_number):
    if 1 <= light_number <= 6:
        GPIO.output(relay_pins[light_number - 1], GPIO.HIGH)
        print(f"Light {light_number} is ON")
    else:
        print("Invalid light number")


def turn_off_light(light_number):
    if 1 <= light_number <= 6:
        GPIO.output(relay_pins[light_number - 1], GPIO.LOW)
        print(f"Light {light_number} is OFF")
    else:
        print("Invalid light number")
try:

    while True:
        print("Choose an option:")
        print("1. Turn on a light")
        print("2. Turn off a light")
        print("3. Exit")

        option = input("Enter your choice: ")

        if option == '1':
            light = int(input("Enter the light number (1-6) to turn ON: "))
            turn_on_light(light)
        elif option == '2':
            light = int(input("Enter the light number (1-6) to turn OFF: "))
            turn_off_light(light)
        elif option == '3':
            break
        else:
            print("Invalid Choice")

except KeyboardInterrupt:
    print("\nExiting...")


finally:
    GPIO.cleanup()


