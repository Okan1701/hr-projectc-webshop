using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Mvc;


namespace klaas.Models{
    public class register{
        [Required, EmailAddress,MaxLength(256), Display(Name = "Email Address")]
        public string email {get;set;}

        [Required, MinLength(6),MaxLength(50), DataType(DataType.Password), Display (Name = "Password")]
        public string password {get;set;}

        [Required, MinLength(6),MaxLength(50), DataType(DataType.Password), Display (Name = "Confirm Password"), 
        Compare("password" , ErrorMessage = "The Password does not matchthe confirmation password.")]
        public string confirmPassword {get;set;}
        
    }
}