import Image from "next/image";

interface TopUpItemProps {
  type: 'dekstop' | 'mobile';
  data: {
    name: string;
    thumbnail: string;
    category: {
      name: string;
    },
  }
}

export default function TopUpItem(props: Readonly<TopUpItemProps>) {
  const { type, data } = props;
  const ROOT_IMG: string = process.env.NEXT_PUBLIC_IMG!;
  const thumbnail = `${ROOT_IMG}/${data.thumbnail}`;

  if (type === "dekstop") {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {data.name}
        </h2>
        <p className="text-lg color-palette-2 mb-0">Category: {data.category.name}</p>
      </div>
    )
  }

  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <Image
          loader={() => `${thumbnail}?w=${280}&q=${75}`}
          src={thumbnail}
          width={0}
          height={0}
          style={{ width: '280px', height: "auto" }}
          className="img-fluid"
          alt="Thumbnail"
        />
      </div>
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">{data.name}</h2>
        <p className="text-sm color-palette-2 text-start mb-0">Category: {data.category.name}</p>
      </div>
    </div>
  )
}
