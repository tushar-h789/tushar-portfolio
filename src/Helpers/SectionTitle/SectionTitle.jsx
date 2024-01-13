
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="md:w-[500px] mx-auto text-center my-10">
        <h4 className="uppercase text-primary font-bold my-4">{heading}</h4>
        <p className="text-4xl font-semibold">{subHeading}</p>
    </div>
  )
}

export default SectionTitle