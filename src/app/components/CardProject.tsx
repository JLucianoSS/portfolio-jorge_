import Image from "next/image";
import Link from "next/link";

interface Props {
  imgUrl: string;
  title: string;
  subtitle?: string;
  colorSubtitle?:string;
  techs: string;
  description:string;
  redirectPageUrl?: string;
  youtubeLink?: string;
  justifyContent?: 'left' | 'right';
  classNameButton?: string;
}

export const CardProject = ({
  imgUrl,
  redirectPageUrl = "google.com",
  subtitle = "subtitulo",
  techs = "React, node, etc..",
  title = "Project Name",
  youtubeLink = "",
  description="description",
  justifyContent = 'right',
  classNameButton = 'bg-orange-400',
  colorSubtitle='text-green-500'
}: Props) => {
  return (
    <div className="relative overflow-hidden bg-white w-full py-20 px-8 rounded-3xl shadow-lg md:px-14">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }}
      ></div>

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <Image
          className="object-cover"
          src={imgUrl}
          fill={true}
          sizes="(max-width: 768px) 100vw, 33vw"
          alt="project image"
        />
      </div>

      {/* Contenido del card */}
      <div
        className={`relative z-10 text-white flex flex-col justify-center w-full ${
          justifyContent === 'right' ? 'items-start' : 'items-end'
        }`}
      >
        {youtubeLink ? <Link href={youtubeLink} target="_blank">
          <h2 className={`text-sm font-bold mb-2 ${colorSubtitle}`}>{subtitle}</h2>
        </Link> :<h2 className={`text-sm font-bold mb-2 ${colorSubtitle}`}>{subtitle}</h2>}
        <h1 className="text-lg font-semibold mb-2">{title}</h1>
        <div
          className={`text-sm text-gray-100 flex flex-col gap-2 mb-4 w-3/4 md:w-[65%] ${
            justifyContent === 'right' ? 'text-start' : 'text-end'
          }`}
        >
          <p>{description}</p>
          <span className="text-xs"><b>Tecnologías usadas:</b><br />{techs}</span> 
        </div>
        <Link
          href={redirectPageUrl}
          target="_blank"
          className={`${classNameButton} text-white font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out`}
        >
          Ver Proyecto
        </Link>
      </div>
    </div>
  );
};