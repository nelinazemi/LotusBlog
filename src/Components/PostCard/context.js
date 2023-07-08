import React, { Component } from "react";
import { storePosts, detailPosts } from "./data";
const PostContext = React.createContext();

class PostStructure extends Component {
    state = {
        posts: [],
        detailPosts: detailPosts,
        cart: [],
        modalOpen: false,
        modalpost: detailPosts,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };
    componentDidMount() {
        this.setPosts();
    }

    setPosts = () => {
        let posts = [];
        storePosts.forEach(item => {
            const singleItem = { ...item };
            posts = [...posts, singleItem];
        });
        this.setState(() => {
            return { posts };
        }, this.checkCartItems);
    };

    getItem = id => {
        const post = this.state.posts.find(item => item.id === id);
        return post;
    };
    handleDetail = id => {
        const post = this.getItem(id);
        this.setState(() => {
            return { detailPosts: post };
        });
    };
    // removeItem = id => {
    //     let tempposts = [...this.state.posts];
    //     let tempCart = [...this.state.cart];

    //     const index = tempposts.indexOf(this.getItem(id));
    //     let removedpost = tempposts[index];
    //     removedpost.inCart = false;
    //     removedpost.count = 0;
    //     removedpost.total = 0;

    //     tempCart = tempCart.filter(item => {
    //         return item.id !== id;
    //     });

    //     this.setState(() => {
    //         return {
    //             cart: [...tempCart],
    //             posts: [...tempposts]
    //         };
    //     }, this.addTotals);
    // };
    clearCart = () => {
        this.setState(
            () => {
                return { cart: [] };
            },
            () => {
                this.setPosts();
                this.addTotals();
            }
        );
    };
    render() {
        return (
            <PostContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart
                }}
            >
                {this.props.children}
            </PostContext.Provider>
        );
    }
}

const PostViewer = PostContext.Consumer;

export { PostStructure, PostViewer };
