import React from 'react';

interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}

const ContentCard: React.FC<Props> = ({ title, description, image, url }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 flex flex-col md:flex-row">
      <img src={image} alt={title} className="w-full md:w-1/3 h-48 object-cover rounded" />
      <div className="md:ml-4 mt-2 md:mt-0">
        <h3 className="text-lg font-bold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-2 inline-block"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ContentCard;
