import React, { Component } from "react";
//Используем готовый компонент infiniteScroll
import InfiniteScroll from "react-infinite-scroller";

import ArrayItem from "./ArrayItem";
import ArrayList from "./ArrayList";

//Запрос локального JSON через fetch.
const dataLink = `${window.location.href}data.json`;

class ItemList extends Component {
    state = {
        // Храним наш JSON, количество выводимых элементов,
        // максимальную длину массива, и проверку на окончание
        dataStore: [],
        length: 10,
        maxLength: null,
        hasMoreItems: true
    };
    fetchData = (data, numberOfItem, pageNumber) => {
        //проверяем максимальную длину, вдруг кто-то добавил что-то в json
        const maxLength = data.length;
        const currentLength = pageNumber * 10;
        //обрезаем полученный массив при помощи изменения его длины
        data.length = numberOfItem;
        //меняем стейт для текущей страницы
        this.setState({
            dataStore: data,
            maxLength,
            length: currentLength
        });
    };
    loadMoreData = page => {
        const length = this.state.length;
        const maxLength = this.state.maxLength;
        const numberOfItem = 10 * page;
        //Мнимая задержка на загрузку, для дебага.
        setTimeout(() => {
            //проверка на последний элемент, выводим оставшиеся элементы, не кратные 10
            if (length >= maxLength && maxLength != null) {
                this.setState({ hasMoreItems: false });
            }
            fetch(dataLink)
                .then(response => response.json())
                .then(data => this.fetchData(data, numberOfItem, page));
        }, 1000);
    };
    render() {
        const { dataStore } = this.state;

        return (
            <ArrayList>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadMoreData}
                    hasMore={this.state.hasMoreItems}
                    loader={<div className="lds-dual-ring" key={0} />}
                >
                    {dataStore.map((item, i) => (
                        <ArrayItem
                            key={i}
                            id={item.id}
                            avatar={item.avatar}
                            firstName={item.first_name}
                            text={item.newsInput}
                        />
                    ))}
                </InfiniteScroll>
            </ArrayList>
        );
    }
}

export default ItemList;
