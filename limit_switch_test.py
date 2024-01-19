import RPi.GPIO as GPIO

# Set the GPIO mode to BCM
GPIO.setmode(GPIO.BCM)

# Define the GPIO pin for your button
SWITCH_PIN = 26
LED_PIN = 13

# Define debounce time in milliseconds
DEBOUNCE_TIME_MS = 200  # 200 milliseconds

# Set the initial state and pull-up resistor for the button
GPIO.setup(SWITCH_PIN, GPIO.IN, pull_up_down=GPIO.PUD_UP)
GPIO.setup(LED_PIN, GPIO.OUT)

# Initialize the button state and previous state
switch_state = GPIO.input(SWITCH_PIN)
prev_switch_state = switch_state

# Define a function to handle button presses
def button_callback(channel):
    global switch_state
    switch_state = GPIO.input(SWITCH_PIN)

# Add an event listener for the button press
GPIO.add_event_detect(SWITCH_PIN, GPIO.BOTH, callback=button_callback, bouncetime=DEBOUNCE_TIME_MS)
GPIO.output(LED_PIN, GPIO.HIGH)


try:
    # Main loop
    while True:
        # Check if the button state has changed
        if switch_state != prev_switch_state:
            #print (switch_state)

            if switch_state == GPIO.HIGH:
                print("The limit switch: TOUCHED -> UNTOUCHED")
                GPIO.output(LED_PIN, GPIO.HIGH)

            else:
                print("The limit switch: UNTOUCHED -> TOUCHED")
                GPIO.output(LED_PIN, GPIO.LOW)
            prev_switch_state = switch_state


        if switch_state == GPIO.HIGH:
            print("The limit switch: UNTOUCHED")
            GPIO.output(LED_PIN, GPIO.HIGH)

        else:
            print("The limit switch: TOUCHED")
            GPIO.output(LED_PIN, GPIO.LOW)

except KeyboardInterrupt:
    # Clean up GPIO on exit
    GPIO.cleanup()
