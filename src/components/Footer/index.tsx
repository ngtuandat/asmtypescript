import Row from "./Row";
import RowChild from "./RowChild";
import RowFirst from "./RowFirst";

const Footer = () => {
  return (
    <div className="max-w-[980px] mx-auto ">
      <RowFirst />
      <Row />
      <RowChild />
    </div>
  );
};

export default Footer;
