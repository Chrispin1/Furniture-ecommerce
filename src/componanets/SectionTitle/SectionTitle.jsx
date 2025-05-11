const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center items-center">
      <h3 className="text-3xl text-[#272343] tracking-wide font-semibold pb-11">
        {title}
      </h3>
    </div>
  );
};

export default SectionTitle;
