﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace PetQuiz.Controllers
{
    [ApiController]
    public class AccountController : Controller
    {
        private UserManager<User> userManager;
        private SignInManager<User> signInManager;
        private IAntiforgery antiForgery;

        public AccountController(UserManager<User> userManager, SignInManager<User> signInManager, IAntiforgery antiForgery)
        {
            this.userManager = userManager;
            this.signInManager = signInManager;
            this.antiForgery = antiForgery;
        }

        [HttpPost]
        [IgnoreAntiforgeryToken]
        [Route("/login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var result = await signInManager.PasswordSignInAsync(request.Email, request.Password, false, false);
            if (result.Succeeded)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpPost]
        [IgnoreAntiforgeryToken]
        [Route("/register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            var result = await userManager.CreateAsync(new User { UserName = request.Email }, request.Password);
            if (result.Succeeded)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet]
        [IgnoreAntiforgeryToken]
        [Route("/loggedin")]
        public IActionResult Status()
        {
            if (User.Identity.IsAuthenticated)
                return Ok();

            return Unauthorized();
        }
    }
}
