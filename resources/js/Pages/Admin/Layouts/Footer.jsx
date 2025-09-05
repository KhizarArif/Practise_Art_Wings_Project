import React from 'react'

const Footer = () => {
  return (
    <footer className="adminFooter" style={{ backgroundColor: "#fff"}}>
                {/* <div className="container-fluid"> */}
                    <div className="row" >
                        <div className="col-sm-6">
                            <script>
                                document.write(new Date().getFullYear())
                            </script> © Art Wings.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-end d-none d-sm-block">
                                Crafted with <i className="mdi mdi-heart text-danger"></i> by Mohammad Khizar Arif
                            </div>
                        </div>
                    </div>
                {/* </div> */}
            </footer>

  )
}

export default Footer