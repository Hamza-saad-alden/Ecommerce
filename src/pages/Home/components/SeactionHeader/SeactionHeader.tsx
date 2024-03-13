type SeactionHeaderProp = {
  header: string
  paragraph: string
}

export const SeactionHeader = ({header, paragraph} : SeactionHeaderProp) => {

  return( 
    <>
      <div className="seaction-header text-center">
        <h1 className="fw-bold">{header}</h1>
        <p className="mt-2">{paragraph}</p>
      </div>
    </>
  )

}