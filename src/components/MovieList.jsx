import React, { Component } from 'react'
import { Spin, Alert, Pagination } from 'antd';
import MovieItem from '@/components/MovieItem'
export default class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            nowPage: parseInt(props.match.params.page) || 1,
            pageSize: 14,
            total: 0,
            movieType: props.match.params.type,
            isLoading: true

        }
    }

    componentDidMount() {
        console.log(typeof this.state.nowPage);
        this.getMovieList()
        // setTimeout(() => {
        //     this.setState({
        //         isLoading:false
        //     })
        // }, 3000);
    }
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match);
        // 每当 地址栏，变化的时候，重置 state 中的 参数项，重置完毕之后，我们可以重新发起数据请求了
        this.setState({
            isLoading: true, // 又要重新加载电影数据了
            nowPage: parseInt(nextProps.match.params.page) || 1, // 要获取第几页的数据
            movieType: nextProps.match.params.type // 电影类型
        }, function () {
            this.getMovieList()
        })
    }
    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
    renderList = () => {
        if (this.state.isLoading) {
            return (
                <Spin tip="Loading..." >
                    <Alert
                        message="请求数据中"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                </Spin>
            )
        } else {
            return (
                <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {this.state.movies.map(item => {
                            return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                        })}
                    </div>
                    <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged} />

                </div>
            )
        }
    }
    //获取电影列表
    getMovieList = () => {
        const start = this.state.pageSize * (this.state.nowPage - 1)
        const url = `https://douban.uieee.com/v2/movie/${this.state.movieType}?start=${start}&count=${this.state.pageSize}`
        this.$axios.get(url).then(res => {
            console.log(res);
            this.setState({
                isLoading: false, 
                movies: res.data.subjects, 
                total: res.data.total 
            })
            // console.log(this.state.movies);

        })
    }
    pageChanged = (page) => {
    
        console.log(this.props);
        // window.location.href = '/#/movie/' + this.state.movieType + '/' + page
        // 使用 react-router-dom 实现编程式导航
        this.props.history.push('/movie/' + this.state.movieType + '/' + page)
    }
}
