import React, { useState } from 'react'
import { Flex, Wrapper, Card, Button } from './styles'
import axios from 'axios'

const Homepage = () => {
    const baseUrl = "http://localhost:8080/api";
    const [text, setText] = useState('')
    
    const handlePlayPause = () => {
        const param = {
            param: '1'
        }
        axios.post(`${baseUrl}/execute`, param)
        .then(res => {
            console.log(res)
        })
        setText('Now playing... ')
    }

    const handleVolumeUp = () => {
        const param = {
            param: '2'
        }
        axios.post(`${baseUrl}/execute`, param)
        .then(res => {
            console.log(res)
        })
        setText('Your volume is down by 10%!')
    }
    const handleVolumeDown = () => {
        const param = {
            param: '3'
        }
        axios.post(`${baseUrl}/execute`, param)
        .then(res => {
            console.log(res)
        })
        setText('Your volume is down by 10%!')
    }
    const handleMute = () => {
        const param = {
            param: '4'
        }
        axios.post(`${baseUrl}/execute`, param)
        .then(res => {
            console.log(res)
        })
        setText('Your audio is muted')
    }
    const handleUnmute = () => {
        const param = {
            param: '5'
        }
        axios.post(`${baseUrl}/execute`, param)
        .then(res => {
            console.log(res)
        })
        setText('Your audio is unmuted')
    }


    return(
        <Wrapper>
            <Flex direction="column" justify="center" alignItems="center">
                <h1>Sisbro Team</h1>
                <Card>
                    <Flex direction="column" alignItems="center">
                        <h1>Manage Your Master Soundcard</h1>
                        <Flex direction="row" justify="center">
                            <Button onClick={handlePlayPause}>Play/Pause</Button>
                        </Flex>
                        <Flex direction="row" justify="center">
                            <Button onClick={handleVolumeUp}>Volume Up</Button>
                            <Button onClick={handleVolumeDown}>Volume Down</Button>
                        </Flex>
                        <Flex direction="row" justify="center">
                            <Button onClick={handleMute}>Mute Device</Button>
                            <Button onClick={handleUnmute}>Unmute Device</Button>
                        </Flex>
                    </Flex>
                    <Flex direction="row" justify="center">
                       <p>{text}</p>
                    </Flex>
                </Card>
            </Flex>
        </Wrapper>
    )
}

export default Homepage