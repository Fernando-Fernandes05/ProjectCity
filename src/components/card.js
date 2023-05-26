import Image from "next/image";

export default function Card(props) {
    const { title, value, icon } = props;
  
    if (!title || !value) return null;
  
    return (
      <div className="card flex justify-between">
        <Image src= { icon } alt="" />
        <div>
          <h2>{title}</h2>
          <p>{value}</p>
        </div>
      </div>
    );
  }