import Category from './Category';
import DatoCmsImage from './DatoCmsImage';

interface Article {
  title: string,
  content: string,
  createdAt: Date,
  updatedAt?: Date,
  category: Category,
  cover: DatoCmsImage,
}

export default Article;
