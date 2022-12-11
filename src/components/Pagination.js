
import React, { Component } from 'react';
import '../css/Pagination.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft,faAnglesRight } from "@fortawesome/free-solid-svg-icons";

class Pagination extends Component {

    constructor(props){
        super(props);
        this.state={
            loading:this.props.loading,
            movieLen:this.props.movieLen,
            postsPerPage:this.props.postsPerPage,
            clicked:false,
        }

    }

    setCurrentPage=(page)=>{
        //alert(page);
        this.props.setCurrentPage(page);
    }

    prevPage=()=>{
        const currentPage=this.props.currentPage
        if(currentPage===1){
            //alert("이동불가!")
            return
        }
        this.props.setCurrentPage(currentPage-1);
    }

    nextPage=()=>{
        const currentPage=this.props.currentPage
        const {movieLen,postsPerPage}=this.props;
        const lastPage=Math.ceil(movieLen / postsPerPage)
        if(currentPage===lastPage){
            //alert("이동불가!")
            return
        }
        this.props.setCurrentPage(currentPage+1);
    }

    firstPage = () => {
        this.props.setCurrentPage(1);
    }

    lastPage = () => {
        const {movieLen,postsPerPage}=this.props;
        const lastPage = Math.ceil(movieLen / postsPerPage)
        this.props.setCurrentPage(lastPage);
    }

    render(){
        let pageNumbers = [];
        const {movieLen,postsPerPage,currentPage}=this.props;
        console.log("pn:"+movieLen);
        console.log("pn:"+postsPerPage);
        for (let i = 1; i <= Math.ceil(movieLen / postsPerPage); i++) {
        pageNumbers.push(i);
        }
        console.log(pageNumbers);

        const pageList=pageNumbers.map((page,i)=>(
        <span className={currentPage === page? "active":""} id="page" onClick={()=>this.setCurrentPage(page)} key={i}>
            {page}
        </span>
            )
        );
        
        return (
    <div id="Pagination">
        <div id="page_list">
            <span id="page" onClick={this.firstPage}>
                <FontAwesomeIcon icon={faAnglesLeft} />
            </span>
            <span id="page" onClick={this.prevPage}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </span>
                {pageList}
            <span id="page" onClick={this.nextPage}>
                <FontAwesomeIcon icon={faAngleRight} />
                    </span>
            <span id="page" onClick={this.lastPage}>
                <FontAwesomeIcon icon={faAnglesRight} />
            </span>
        </div>
    </div>
        );
    }
}

export default Pagination;
