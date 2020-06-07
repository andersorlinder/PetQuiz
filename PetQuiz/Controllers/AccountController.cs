using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace PetQuiz.Controllers
{
    [ApiController]
    public class AccountController : Controller
    {
        private UserManager<User> userManager;
        private SignInManager<User> signInManager;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
        }

        [HttpPost]
        [IgnoreAntiforgeryToken]
        [Route("/login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var result = await signInManager.PasswordSignInAsync(request.Email, request.Password, false, false);
            Console.WriteLine(result);
            if (result.Succeeded)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost]
        [Route("/register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var result = await userManager.CreateAsync(new User {UserName = request.Email }, request.Password);
            if (result.Succeeded)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet]
        [Route("/loggedin")]
        public IActionResult Status()
        {
            if (User.Identity.IsAuthenticated)
                return Ok();

            return Unauthorized();
        }

        [HttpPost]
        [Route("/logout")]
        public async Task<IActionResult> Logout()
        {
            await signInManager.SignOutAsync();
            return Ok();
        }
    }
}
