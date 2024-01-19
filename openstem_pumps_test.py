import RPi.GPIO as GPIO
import time

GPIO.setmode(GPIO.BCM)

relay_pins = [19, 20, 12]

for pin in relay_pins:
    GPIO.setup(pin, GPIO.OUT)
    
def turn_on_pump(pump_number):
    if 1 <= pump_number <= 3:
        GPIO.output(relay_pins[pump_number - 1], GPIO.HIGH)
        print(f"Pump {pump_number} is ON")
    else:
        print("Invalid pump number")


def turn_off_pump(pump_number):
    if 1 <= pump_number <= 3:
        GPIO.output(relay_pins[pump_number - 1], GPIO.LOW)
        print(f"Pump {pump_number} is OFF")
    else:
        print("Invalid pump number")
try:

    while True:
        print("Choose an option:")
        print("1. Turn on a pump")
        print("2. Turn off a pump")
        print("3. Exit")

        option = input("Enter your choice: ")

        if option == '1':
            pump = int(input("Enter the pump number (1-3) to turn ON: "))
            turn_on_pump(pump)
        elif option == '2':
            pump = int(input("Enter the pump number (1-3) to turn OFF: "))
            turn_off_pump(pump)
        elif option == '3':
            break
        else:
            print("Invalid Choice")

except KeyboardInterrupt:
    print("\nExiting...")


finally:
    GPIO.cleanup()



