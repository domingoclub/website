---
title: Unstructured technical notes
---

# Raspberry Pico

## Documentation

- [Pico documentation](https://www.raspberrypi.org/documentation/rp2040/getting-started/)
- [Pico MicroPython documentation](https://datasheets.raspberrypi.org/pico/raspberry-pi-pico-python-sdk.pdf)
- [Pinout](https://datasheets.raspberrypi.org/pico/Pico-R3-A4-Pinout.pdf)

## Installation

1. [Install MicroPython](https://www.raspberrypi.org/documentation/rp2040/getting-started/#getting-started-with-micropython)
2. Install rshell `pip3 install rshell` ([guide](https://www.twilio.com/blog/programming-raspberry-pi-pico-microcontroller-micropython))
3. Install [Minicom](https://salsa.debian.org/minicom-team/minicom) (USB serial) - [AUR](https://aur.archlinux.org/packages/minicom-git/)

## Use

1. Go to the folder of your choice `cd pico/experiments/` and create a `main.py` file that will contain your MicroPython script
2. Run `rshell -p /dev/ttyACM0 --buffer-size 512` where `ttyACM0` in the Pico adress on your machine. Run `dmesg -w` to see the devices connected to your computer, and therefore the address of your Pico.
3. Copy your local script to the pico by running `cp main.py /pyboard/main.py`
4. Close the rshell connection `CTRL + x` and unplug/plug your Pico
5. Run `minicom -b 115200 -o -D /dev/ttyACM0` to read the serial communiction (replace `ttyACM0` with your Pico address previously obtained)


# OLED screen to Raspberry Pico through SPI

## Wiring

- `GND` -> `GND`
- `VCC` -> `3V3` out
- `CLK` -> `GP10`
- `MOSI` -> `GP11`
- `RES` -> `GP2`
- `DC` -> `GP5`
- `CS` -> `GND`

See [this guide p.36](https://datasheets.raspberrypi.org/pico/raspberry-pi-pico-python-sdk.pdf) & [this example](https://github.com/raspberrypi/pico-micropython-examples/blob/master/i2c/1106oled/sh1106.py) on Github.

