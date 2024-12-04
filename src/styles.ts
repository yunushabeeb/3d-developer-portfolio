const styles = {
  paddingX: 'sm:px-16 px-6', // Horizontal padding with responsiveness
  paddingY: 'sm:py-16 py-6', // Vertical padding with responsiveness
  padding: 'sm:px-16 px-6 sm:py-16 py-10', // Combined horizontal and vertical padding with responsiveness

  heroHeadText:
    'font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2', // Styling for hero heading with responsiveness
  heroSubText:
    'text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]', // Styling for hero subtext with responsiveness

  sectionHeadText:
    'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]', // Styling for section heading with responsiveness
  sectionSubText:
    'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider', // Styling for section subtext with responsiveness
};

export { styles }; // Export the styles object for use in other components
