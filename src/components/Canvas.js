import React, { useRef, useEffect } from 'react'

const Canvas = props => {
  
  const { draw, width, height, ...rest } = props
  const canvasRef = useRef(null)
  
  useEffect(() => {
    
    const canvas = canvasRef.current
    canvas.width = width
    canvas.height = height
    const context = canvas.getContext('2d')
    let frameCount = 0
    let animationFrameId
    
    const render = () => {
      frameCount++
      draw(context, frameCount)
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()
    
    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [draw, width, height])
  
  return <canvas ref={canvasRef} {...rest}/>
}

export default Canvas