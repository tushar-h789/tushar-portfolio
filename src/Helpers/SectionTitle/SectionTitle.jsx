
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="w-full mx-auto text-center my-10">
        <h4 className="uppercase text-primary font-bold">{heading}</h4>
        <p className="text-2xl font-semibold">{subHeading}</p>
    </div>
  )
}

export default SectionTitle