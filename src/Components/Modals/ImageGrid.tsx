import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListType from '../../Interfaces/ImageListType';

function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
        size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

function ImageGrid({itemData} : {itemData : ImageListType[]}) {
  return (
    <ImageList
      sx={{ width: "100%", height: "auto" }}
      variant="quilted"
      cols={3}
      rowHeight={"auto"}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.title} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ImageGrid