from gpiozero import Button, MotionSensor
from picamera import PiCamera
from time import sleep
from signal import pause

# Create objects
button = Button(2)
pir = MotionSensor(4)
camera = PiCamera()

# Start the camera
camera.rotation = 180
camera.start_preview()

# Image counter
i = 0

# Stop the camera when the push button is pressed
def stop_camera():
    camera.stop_preview()
    exit()

# Take a photo when motion is detected
def take_photo():
    global i
    i = i + 1
    camera.capture('/home/pi/Desktop/image_%s.jpg' % i)
    print('A photo has been taken')
    sleep(10)

# Assign functions
button.when_pressed = stop_camera
pir.when_motion = take_photo

# Keep the program running
pause()
