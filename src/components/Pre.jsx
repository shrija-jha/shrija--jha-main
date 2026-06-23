function Pre({ load }) {
  return <div id={load ? 'preloader' : 'preloader-none'} />
}

export default Pre
