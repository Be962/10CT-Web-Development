const section = document.querySelector('section.vid')
const vid = section.querySelector('video')

vid.pause()

const scroll = () => {
    const distance = window.scrollY - section.offsetTop // Distance that has been scrolled minus the distance to get to the top of the section
    const total = section.clientHeight - window.innerHeight // Distance to get to bottom of section, minus the height of the window because scroll counts from top of the window    

    let percentage = distance / total // Percentage of video to be played

    // Ensure that percentage is always between 0-1
    percentage = Math.max(0, percentage) // Pick the larger one between percentage and 0
    percentage = Math.min(percentage, 1) // Pick the smaller one between percentage and 1

    if (vid.duration > 0) { // Video loaded
        vid.currentTime = vid.duration * percentage // Set the time of the video to the amount that has been scrolled 
    }
}

scroll()
window.addEventListener("scroll", scroll)

