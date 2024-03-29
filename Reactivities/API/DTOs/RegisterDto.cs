using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public class RegisterDto
{
    [Required]
    [EmailAddress] 
    public string Email { get; set; }
    [Required]
    [RegularExpression("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$", ErrorMessage = "Password must contain Uppercase char, Lowercase char, Special symbol and be 4-10 symbols long!")] 
    public string Password { get; set; }
    [Required]
    public string DisplayName { get; set; }
    [Required]
    public string Username { get; set; }
}