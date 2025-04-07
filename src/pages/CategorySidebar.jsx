import { Link, useParams } from 'react-router-dom';
import { getSubcategories, getCategoryName } from '../utils/categories';

const CategorySidebar = ({ categories }) => {
  const { category: activeCategory, subcategory: activeSubcategory } = useParams();

  return (
    <aside className="category-sidebar">
      <h3>Categories</h3>
      <ul className="category-list">
        {categories.map(category => (
          <li key={category} className="category-item">
            <Link 
              to={`/category/${category}`}
              className={`category-link ${activeCategory === category ? 'active' : ''}`}
            >
              {getCategoryName(category)}
            </Link>
            {activeCategory === category && (
              <SubCategoryMenu 
                category={category} 
                activeSubcategory={activeSubcategory}
              />
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

const SubCategoryMenu = ({ category, activeSubcategory }) => {
  const subcategories = getSubcategories(category);
  
  return (
    <ul className="subcategory-list">
      {Object.entries(subcategories).map(([key, name]) => (
        <li key={key} className="subcategory-item">
          <Link 
            to={`/category/${category}/${key}`}
            className={`subcategory-link ${activeSubcategory === key ? 'active' : ''}`}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategorySidebar;