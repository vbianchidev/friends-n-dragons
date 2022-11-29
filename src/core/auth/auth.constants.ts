import { SetMetadata } from '@nestjs/common';

export const jwtConstants = {
  secret: '937bda87c8d21c6f6ff252cdb7e47b1b6cecdd3abfb2780c6d249634ea46c42e',
};
export const IS_PUBLIC_KEY =
  '3a44ea128a2d441ba88798de060b28c7cd5e944ca24cec2b7ab5e10379769a27';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
