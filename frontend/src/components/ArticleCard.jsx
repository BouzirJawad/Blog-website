
import React from 'react';

const ArticleCard = (props) => {
  return (
    <div className="hover:scale-102 transition duration-500 rounded-lg shadow-lg overflow-hidden mainDiv flex flex-col">
      {props.image && (
        <img
          src={props.image}
          alt={props.title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold mb-2">{props.title}</h2>

        <p className="text-gray-600 text-sm mb-4">
          Category: <span className="font-medium">{props.category}</span>
        </p>

        <p className="text-gray-700 flex-grow">
          {props.content.length > 100
            ? props.content.substring(0, 100) + '...'
            : props.content}
        </p>

        <div className="mt-4">
          <button className="primary-btn">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
