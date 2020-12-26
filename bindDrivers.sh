bind_speaker() {
  echo "$1" > /sys/bus/pci/drivers/snd_hda_intel//bind
}

unbind_speaker() {
  echo "$1" > /sys/bus/pci/drivers/snd_hda_intel//unbind
}

read -p "bind/unbind speaker device?: " prompt
read -p "which port? " port

if [ $prompt = "unbind" ];
then
        unbind_speaker "speaker1"
        echo "unbinding speaker"
elif [ $prompt = "bind" ];
then
        bind_speaker "speaker1"
        echo "binding speaker"
else
	echo "wrong command please try again"
fi