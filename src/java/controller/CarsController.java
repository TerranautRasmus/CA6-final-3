package controller;

import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;

@Path("cars")
public class CarsController {

    @Context
    private UriInfo context;

    public CarsController() {
    }

    @POST
    @Produces("application/json")
    @Consumes("application/json")
    public void addCar() {
        
    }
    
    @GET
    @Produces("application/json")
    public String getCars() {
        //TODO return proper representation object
        throw new UnsupportedOperationException();
    }

    @PUT
    @Consumes("application/json")
    public void editCar(String content) {
    }
    
    @DELETE
    public void deleteCar(long id) {
        
    }
}
