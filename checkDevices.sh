for i in $(find /proc/asoung/card*/ -name dev); do
    (
        path="${i%/dev}"
        devname="$(udevadm info -q name -p $path)"
        [[ "$devname" == "bus/"* ]] && continue
        eval "$(udevadm info -q property --export -p $path)"
        [[ -z "$ID_SERIAL" ]] && continue
        echo "/dev/$devname - $ID_SERIAL"
    )
done