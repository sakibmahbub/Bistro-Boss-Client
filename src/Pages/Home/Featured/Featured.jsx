import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";
const Featured = () => {
  return (
    <section className="featured-item text-white pt-8 my-24">
      <SectionTitle
        subHeading="Check it out"
        heading="Featured Item"
      ></SectionTitle>
      <div className="md:flex justify-center items-center pb-24 pt-14 px-36">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="md:ml-10">
          <p>June 30, 2023</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            quibusdam laboriosam, optio omnis natus hic quasi nisi laborum
            consectetur totam. Rerum non esse minus veniam? Libero similique
            deserunt molestiae. Quis porro blanditiis tempore ex quas similique
            error. Placeat sunt, architecto optio, aspernatur totam blanditiis
            repudiandae itaque esse error debitis autem.
          </p>
          <button className="btn btn-outline">Order Now</button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
