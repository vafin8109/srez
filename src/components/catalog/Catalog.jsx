import { Card } from '../card/Card';
import s from './Catalog.module.css';
import { products } from '../../data/data'
import { Search } from '../search/Search'
import { useState } from 'react'

export function Catalog() {
    const [query, setQuery] = useState('');
    const [sorting, setSorting] = useState('');
    const [category, setCategory] = useState(0);
    function sort(e) {
        setSorting(e.target.value)
    }
    function handleChange(e) {
        setQuery(e.target.value)
    }
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(query.toLowerCase())
            &&
            (product.category == category || category == 0)
            ;
    })
    const sortProducts = (sorting, products) => {
        switch (sorting) {
            case 'price_asc':
                return [...products].sort((a, b) => a.price - b.price);
            case 'price_desc':
                return [...products].sort((a, b) => b.price - a.price);
            case 'count_ost':
                return [...products].sort((a, b) => (b.count === a.count ? 0 : b.count ? 1 : -1));
            default:
                return products;

        }
    }
    const sortedFilteredProducts = sortProducts(sorting, filteredProducts);

    return (
        <section className={`${s.catalog}`}>
            <h2>Каталог</h2>
            <Search handleChange={handleChange} />
            <div className={s.sort__category}>
                <div className={s.cat}>
                    <p>Категории:</p>
                    <div className={s.btns}>
                        <buttton onClick={() => setCategory(0)} className='btn'>Все товары</buttton>
                        <buttton onClick={() => setCategory(1)} className='btn'>Струнные</buttton>
                        <buttton onClick={() => setCategory(2)} className='btn'>Духовые</buttton>
                        <buttton onClick={() => setCategory(3)} className='btn'>Ударные</buttton>
                    </div>
                </div>
                <div className={s.sort}>
                    <p>Сортировка:</p>
                    <select onChange={sort}>
                        <option value="price_asc">По возрастанию цены</option>
                        <option value="price_desc">По убыванию цены</option>
                        <option value="count_ost">По наличию</option>
                    </select>
                </div>
            </div>

            <div className={s.cards}>
                {
                    sortedFilteredProducts.length ?
                        sortedFilteredProducts.map((product) => {
                            return (
                                <Card id={product.id} img={product.img} name={product.name} price={product.price} count={product.count} />
                            )
                        })
                        :
                        <p className="error">Ничего не найдено по запросу "{query}"</p>
                }
            </div>
        </section>
    )
}