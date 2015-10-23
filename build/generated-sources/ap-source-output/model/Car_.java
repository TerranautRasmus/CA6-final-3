package model;

import java.util.Date;
import javax.annotation.Generated;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2015-10-23T11:00:38")
@StaticMetamodel(Car.class)
public class Car_ { 

    public static volatile SingularAttribute<Car, Integer> year;
    public static volatile SingularAttribute<Car, Long> price;
    public static volatile SingularAttribute<Car, Date> registered;
    public static volatile SingularAttribute<Car, String> description;
    public static volatile SingularAttribute<Car, String> model;
    public static volatile SingularAttribute<Car, Long> id;
    public static volatile SingularAttribute<Car, String> make;

}