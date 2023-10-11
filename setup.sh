#!/usr/bin/bash

START=1
END=18
FILE_EXT=js

for i in $(seq $START $END);
do

    if [ $i -lt 10 ]; 
    then
        mkdir "0$i-week"
        cd "0$i-week"
    else
        mkdir "$i-week"
        cd "$i-week"
    fi

    for j in $(seq 1 5);
    do
        mkdir "$j-day"
        cd "$j-day"

        # if filling out student version
        touch "scratch.$FILE_EXT"
        mkdir homework practices
        touch homework/.gitkeep practices/.gitkeep

        # if filling out instructor version
        # touch notes.md
        # touch "scratch.$FILE_EXT"

        cd ..
    done

    cd ..
done