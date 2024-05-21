import React from 'react';
import { DimensionValue, Image, ImageSourcePropType } from 'react-native';

type TIconProps = {
    width: DimensionValue;
    height: DimensionValue;
    source: ImageSourcePropType;
}

const Icon = ({ width, height, source }: TIconProps) => {
  return <Image style={{ width, height }} source={source} />;
};

export default Icon;