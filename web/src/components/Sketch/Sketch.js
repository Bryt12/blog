const Sketch = ({ sketch }) => {
  return (
    <div>
      <iframe
        className="overflow-hidden"
        scrolling="no"
        frameBorder="0"
        width="400px"
        height="442px"
        title={sketch.title}
        src={sketch.url}
      ></iframe>
    </div>
  )
}

export default Sketch
